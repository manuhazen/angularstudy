import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = "Angular";
    this.votes = 10;
    this.link = "https://www.google.com";
  }

  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    if (this.votes <= 0) {
      this.votes = 0;
    }
    return false;
  }

  ngOnInit() {}
}
