import { Page,expect } from "@playwright/test";

export  default class categoryPage{
    private page : Page;
    constructor(page: Page) {
        this.page = page;
    }
    
}