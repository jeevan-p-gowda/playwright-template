# Define a setup target
setup:
	@echo "🚀 Setting up the project..."
	@corepack enable
	@yarn 
	@yarn playwright install chromium
	@yarn husky install
	@echo "✅ Setup complete!"
