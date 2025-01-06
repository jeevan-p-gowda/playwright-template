import { Page, Locator } from '@playwright/test';

export default class Table {
  private readonly page: Page;
  private readonly table: Locator;
  private readonly headerRow: string;
  private readonly header: string;
  private readonly rows: Locator;
  private readonly tableData: string;
  private readonly span: string;
  private readonly a: string;
  private readonly checkBox: string;
  private readonly search: Locator;
  private readonly searchField: Locator;
  private readonly tableCountText: Locator;
  private readonly resetAllButton: Locator;

  constructor(page: Page, locator: string) {
    this.page = page;
    this.table = page.locator(locator);
    this.headerRow = 'thead tr';
    this.header = 'th';
    this.rows = this.table.locator('tbody tr');
    this.tableData = 'td';
    this.span = 'span';
    this.a = 'a';
    this.checkBox = "//input[@type='checkbox']";
    this.search = page.locator("button[aria-label='Search in the table']");
    this.searchField = page.locator("input[aria-label='search']");
    this.tableCountText = page.locator("//div[contains(@class,'MuiTablePagination-root')]//p[2]");
    this.resetAllButton = page.locator("//button[.='Reset All']");
  }

  async getColumns() {
    const headerRow = this.table.locator(`thead tr:nth-child(${await this.table.locator(this.headerRow).count()})`);
    return headerRow.locator(this.header);
  }

  async getRows() {
    return this.rows;
  }

  async getAllRows() {
    return this.rows.all();
  }

  async getNoDataFoundMessage() {
    return this.rows.locator(this.tableData).locator(this.span).textContent();
  }

  async getTableCountTextElement() {
    return this.tableCountText;
  }

  async selectFilter(filter: string, filterValue: string) {
    await this.page.locator(`//span[contains(.,'${filter}')]`).click();
    await this.page.getByRole('option', { name: filterValue }).getByRole('checkbox').check();
  }

  async clickAndSearchInField(searchText: string) {
    await this.search.click();
    await this.searchField.fill(searchText);
  }

  async searchTable(tableData: string, clickSearch: boolean) {
    if (clickSearch) {
      await this.search.click();
    }
    await this.searchField.fill(tableData);
  }

  async clearSearch() {
    await this.searchField.clear();
  }

  async clickResetAllButton() {
    await this.resetAllButton.click({ delay: 500 });
  }

  async getColumnHeader(columnName: string) {
    const columns = await this.getColumns();
    const headers = await columns.all();
    for (const header of headers) {
      if ((await header.textContent()) === columnName) {
        return header;
      }
    }
  }

  async getColumnIndex(columnName: string) {
    const columns = await this.getColumns();
    const headers = await columns.allTextContents();
    return headers.findIndex((x) => x.includes(columnName)) + 1;
  }

  async getColumnDataElement(columnName: string) {
    const index = await this.getColumnIndex(columnName);
    const dataElement = this.rows.locator(`td:nth-child(${index})`);
    return dataElement;
  }

  async getColumnData(columnName: string) {
    const data = await (await this.getColumnDataElement(columnName)).textContent();
    return data;
  }

  async getAllDataOfColumn(columnName: string) {
    const datas: string[] = await (await this.getColumnDataElement(columnName)).allTextContents();
    return datas;
  }

  async getMatchedRow(tableData: string) {
    const allRows = await this.getAllRows();
    for (const row of allRows) {
      const texts = await row.locator(this.tableData).allTextContents();
      for (const text of texts) {
        if (text === tableData) {
          return row;
        }
      }
    }
  }

  async getMatchedRows(tableData: string) {
    const rows: Locator[] = [];
    const allRows = await this.getAllRows();
    for (const row of allRows) {
      const texts = await row.locator(this.tableData).allTextContents();
      for (const text of texts) {
        if (text === tableData) {
          rows.push(row);
        }
      }
    }
    return rows;
  }

  async getColumnDataForMatchedRows(tableData: string, columnName: string) {
    const columnData: string[] = [];
    const index = await this.getColumnIndex(columnName);
    const matchedRows = await this.getMatchedRows(tableData);
    for (const matchedRow of matchedRows) {
      const data = await matchedRow.locator(`td:nth-child(${index})`).textContent();
      if (typeof data === 'string') {
        columnData.push(data);
      } else {
        throw new Error(`Alien found ${data}`);
      }
    }
    return columnData;
  }

  async getColumnDataForMatchedRow(tableData: string, columnName: string) {
    const index = await this.getColumnIndex(columnName);
    const matchedRow = await this.getMatchedRow(tableData);
    const data = await matchedRow?.locator(`td:nth-child(${index})`).textContent();
    return data;
  }

  async clickOnActionElementInARow(tableData: string, locator: string) {
    const matchedRow = await this.getMatchedRow(tableData);
    await matchedRow?.locator(locator).click();
  }

  async clickOnCheckBoxInARow(tableData: string) {
    const matchedRow = await this.getMatchedRow(tableData);
    await matchedRow?.locator(this.checkBox).check();
  }

  async clickOnCheckBoxOfRows(tableDatas: string[]) {
    for (const tableData of tableDatas) {
      await this.clickOnCheckBoxInARow(tableData);
    }
  }

  async clickLinkInMatchedRow(tableData: string, columnName: string) {
    const index = await this.getColumnIndex(columnName);
    const matchedRow = await this.getMatchedRow(tableData);
    await matchedRow?.locator(`td:nth-child(${index})`).locator(this.a).click();
  }

  async clickOnLinkOfFirstRow(columnName: string) {
    const index = await this.getColumnIndex(columnName);
    await this.table.locator(`tbody tr:nth-child(1) td:nth-child(${index})`).locator(this.a).click();
  }

  async clickOnTableHeader(columnName: string) {
    const header = await this.getColumnHeader(columnName);
    await header?.click();
  }
}
