import { Component } from '@angular/core';
import {UserProfile} from "../common.interface";

@Component({
  selector: 'app-app-person',
  templateUrl: './app-person.component.html',
  styleUrls: ['./app-person.component.css']
})

export class AppPersonComponent {
  public profile: UserProfile = {
    name: 'John Doe',
    bio: 'Software Engineer',
    image: 'path/to/image.jpg',
    posts: 10,
    followers: 1000,
    following: 500
  };
}
