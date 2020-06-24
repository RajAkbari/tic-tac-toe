import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isNull } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  drawMessage: string = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) {}

  handleClick = (itemNumber: string) => {
    if (this.winMessage) {
      return this.toastr.success(this.winMessage);
    }

    if (this.drawMessage) {
      return this.toastr.warning(this.drawMessage);
    }

    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';

      this.isCross = !this.isCross;
    } else {
      return this.toastr.info('already filled!');
    }
    this.checkIsWinner();
  };

  checkIsWinner = () => {
    //  checking  winner of the game
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
      return this.toastr.success(this.winMessage);
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[1] !== 'empty' &&
      this.itemArray[2] !== 'empty' &&
      this.itemArray[3] !== 'empty' &&
      this.itemArray[4] !== 'empty' &&
      this.itemArray[5] !== 'empty' &&
      this.itemArray[6] !== 'empty' &&
      this.itemArray[7] !== 'empty' &&
      this.itemArray[8] !== 'empty'
    ) {
      this.drawMessage = `draw`;
      return this.toastr.warning(this.drawMessage);
    }
  };

  reloadGame = () => {
    this.winMessage = '';
    this.drawMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
    return this.toastr.info('reloading...');
  };
}
