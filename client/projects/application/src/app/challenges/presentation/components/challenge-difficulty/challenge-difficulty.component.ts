import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { ChallengeDifficulty } from "projects/application/src/app/shared/application/models/challenge-difficulty";

/**
 * Challenge difficulty text.
 */
@Component({
    selector: "app-challenge-difficulty",
    imports: [],
    templateUrl: "./challenge-difficulty.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./challenge-difficulty.component.css"]
})
export class ChallengeDifficultyComponent {
    /**
     * Challenge difficulty.
     */
    @Input()
    difficulty = ChallengeDifficulty.easy;
}
