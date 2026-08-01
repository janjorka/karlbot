import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { ChallengeSubmissionsInfo } from "projects/application/src/app/shared/application/models/challenge-submissions.info";
import { MatIconModule } from "@angular/material/icon";

/**
 * Status icon of a challenge.
 */
@Component({
    selector: "app-challenge-status",
    imports: [MatIconModule],
    templateUrl: "./challenge-status.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./challenge-status.component.css"]
})
export class ChallengeStatusComponent {
    /**
     * Challenge submissions info.
     */
    @Input()
    submissionsInfo: ChallengeSubmissionsInfo | null = null;

    get status() {
        if (this.submissionsInfo === null)
            return "none";
        else if (this.submissionsInfo.ownSuccessfulSubmissionCount !== 0)
            return "done";
        else if (this.submissionsInfo.ownSubmissionCount !== 0)
            return "attempted";
        else
            return "none";
    }
}
