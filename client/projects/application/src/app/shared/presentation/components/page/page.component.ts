import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * Page skeleton. Use an element with `page-title` attribute to provide a title.
 */
@Component({
    selector: "app-page",
    imports: [],
    templateUrl: "./page.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./page.component.css"]
})
export class PageComponent {
    /**
     * Whether the page should span full screen width. Default is `false`.
     */
    @Input()
    fullWidth = false;
}
