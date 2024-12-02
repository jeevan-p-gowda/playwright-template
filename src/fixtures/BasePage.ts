import { Page } from "@playwright/test";
import PageActions from "../utils/PageActions";
import PageWaits from "../utils/PageWaits";

export default abstract class BasePage {
    protected readonly pageWaits: PageWaits;
    protected readonly pageActions: PageActions;

    constructor(page: Page) {
        this.pageWaits = new PageWaits(page);
        this.pageActions = new PageActions(page);
    }
}
