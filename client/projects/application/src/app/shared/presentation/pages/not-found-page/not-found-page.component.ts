import { Component, ChangeDetectionStrategy } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";

/**
 * A page informing that the searched page does not exist.
 */
@Component({
    selector: "app-not-found-page",
    imports: [MatIconModule],
    templateUrl: "./not-found-page.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./not-found-page.component.css"]
})
export class NotFoundPageComponent {

}
