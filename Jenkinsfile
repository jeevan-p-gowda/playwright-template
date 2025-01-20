// Create a multi-branch pipeline job in Jenkins prior pushing this file to remote.
// Install docker plugins and enable SSH agent plugin
// Install HTML Publisher plugin and JUnit plugin

pipeline {
    agent {
	   docker{
		   image 'mcr.microsoft.com/playwright:v1.48.2-focal'
		   args '-u root:sudo'
	   }
    }

    triggers {
        cron("")
    }

    parameters {
        string(name: 'ENV', defaultValue: 'preprod', description: 'Environment to run the tests')
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
                    sh "ENV=${params.ENV} yarn playwright test"
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
