// Create a multi-branch pipeline job in Jenkins prior pushing this file to remote.
// Install docker plugins and enable SSH agent plugin
// Install HTML Publisher plugin and JUnit plugin
// Install ansicolor plugin

pipeline {
    agent {
	   docker{
		   image 'mcr.microsoft.com/playwright:v1.48.2-focal'
		   args '-u root:sudo'
	   }
    }

    options {
        ansiColor('xterm')
        disableConcurrentBuilds()
    }

    triggers {
        cron("")
    }

    parameters {
        string(name: 'ENV', defaultValue: 'preprod', description: 'Environment file name, which is stored in Jenkins credentials')
        choice(name: 'TEST_RUN',
               choices: ["feature", "regression", "sanity"],
               description: 'Select a type of test run.')
        string(name: 'TEST_FILE', defaultValue: '', description: 'Relative path of Test file, for more than one file separate them with space')
    }

    stages {
        stage('Setting up test bed') {
            steps {
		    script{
                withCredentials([file(credentialsId: params.ENV, variable: params.ENV)]) {
                    sh """
                    mkdir -p .env
                    cp \$${params.ENV} .env/
                    corepack enable
                    yarn
                    yarn playwright install chromium
                    """
                }
		    }
            }
        }

        stage('Executing tests') {
            steps {
                script {
                    if (params.TEST_RUN == 'feature') {
                        sh "ENV=${params.ENV} yarn playwright test ${params.TEST_FILE}"
                    } else if (params.TEST_RUN == 'regression') {
                        if (JOB_NAME.contains('project1')){
                            sh "ENV=${params.ENV} yarn playwright test tests/project1/"
                        } else {
                            sh "ENV=${params.ENV} yarn playwright test tests/project2/"
                        }
                    } else if (params.TEST_RUN('sanity')) {
                        if (JOB_NAME.contains('project1')){
                            sh "ENV=${params.ENV} yarn playwright test tests/project1/ --grep @sanity"
                        } else {
                            sh "ENV=${params.ENV} yarn playwright test tests/project2/ --grep @sanity"
                        }
                    }
                }
}
}
    post {
        always {
            junit 'playwright-report/junit.xml'
            publishHTML([
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'playwright-report',
                            reportFiles: 'index.html',
                            reportName: "HTML Report",
                        ])
        }
}
}
}
