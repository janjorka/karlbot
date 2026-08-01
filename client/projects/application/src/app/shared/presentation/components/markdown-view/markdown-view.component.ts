
import { Component, ElementRef, Input, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
import { MarkdownService } from "../../../application/services/markdown-service";

/**
 * Renders a Markdown code with appropriate styles.
 */
@Component({
    selector: "app-markdown-view",
    imports: [],
    templateUrl: "./markdown-view.component.html",
    styleUrls: ["./markdown-view.component.css"],
    changeDetection: ChangeDetectionStrategy.Eager,
    encapsulation: ViewEncapsulation.None
})
export class MarkdownViewComponent {
    /**
     * Markdown source code to be rendered.
     */
    @Input()
    get source(): string {
        return this._source;
    }

    set source(value: string) {
        this._source = value;
        this.elementRef.nativeElement.innerHTML = this.markdownService.render(value);
    }

    private _source = "";

    constructor(private readonly elementRef: ElementRef, private readonly markdownService: MarkdownService) { }
}
