import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class MinimumNumberOfRuns extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @tracked width = 1;
  @tracked length = 1;

  get area() {
    return this.width * this.length;
  }

  get twoFtBoundryExclusionDeterminant() {
    return this.area - 16 * (this.length + this.width) + 64;
  }

  get twoFtExclusionApplies() {
    return this.twoFtBoundryExclusionDeterminant > 0;
  }
  
  get NminZ() {
    return 2 * Math.sqrt(this.area);
  }

  get Smax() {
    return Math.floor((this.width - 4) * Math.sqrt(2));
  }

  get Zmax() {
    return 2 * this.Smax - 19;
  }

  get MinRuns() {
    let minRuns = Math.ceil(this.NminZ / this.Zmax);
    return minRuns > 2 ? minRuns : 2;
  }

  @action 
  setLength(length: string) {
    this.length = Number(length);
  }
  @action
  setWidth(width: string) {
    this.width = Number(width);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'minimum-calc-stuff': MinimumNumberOfRuns;
  }
}
