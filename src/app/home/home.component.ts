import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pcversion = [
    {id: 0, releaseVer: 'Hotfix 24.2.3', releaseDate: 'today', patchNotes: `Changes:
    Improvements towards Clients getting easily knocked off their K-Drives when casually riding, as opposed to the Host.
    Reverted the following fix due to breaking ‘Sprint Toggle’ controller functionality (will be revisited):
        Fixed not being able to do a Melee spin attack with controller unless you wait 0.15 seconds after pressing the slide button.`},
    {id: 1, releaseVer: 'Update 24.2', releaseDate: 'yesterday', patchNotes: `REQUIRED: ‘Old Mate’ Rank with Solaris United Standing

    HOW TO START: Talk to Eudico in the Backroom and accept the Profit-Taker Bounties.
        Profit-Taker Bounties must be completed in chronological order first, at which afterwards they can be completed in any order.
    PROFIT-TAKER BOUNTY REWARDS
        New Corpus Components
            Gyromag Systems: A modular component that regulates attitude and altitude in various Corpus systems.
            Atmo Systems: A modular component that compensates for the multitude of atmospheric conditions encountered in the Origin System.
            Repeller Systems: Anti-gravity system that allows massively heavy objects to be manipulated by a single user.
        New Archwing Mods
            Ammo Chain: +100% Ammo Maximum
            Arch-Gun Ace: On Headshot Kill: 50% Fire/Charge Rate and 100% Reload Speed for 9 seconds
            Deadly Efficiency: On Reload from Empty: 120% Damage for 9 seconds
            Resolute Focus: 100% Chance to Resist Staggers/Knockdowns when Aiming. -50% Spread when Aiming.
            Marked Target: 120% Status Chance when Aiming
            Sabot Rounds: +60% Damage +3m Punch Through
            Critical Focus: 60% Critical Chance and Critical Damage when Aiming
            Quick Reload: +100% Reload Speed
    `}
  ];

  ps4version = this.pcversion;
  xb1version = this.pcversion;
  nswversion = this.pcversion;

  showTabContent: boolean;

  constructor() { }

  ngOnInit() {
  }

  reloadTabs() {
    this.showTabContent = false;
    setTimeout(() => this.showTabContent = true, 500);
  }

}
