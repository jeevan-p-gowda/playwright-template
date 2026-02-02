# Define a setup target
setup:
	@echo "🚀 Setting up the project..."
	@corepack enable
	@yarn 
	@yarn playwright install chromium --only-shell
	@yarn playwright install chrome
	@yarn husky install
	@mkdir -p .env
	@echo "✅ Setup complete!"
