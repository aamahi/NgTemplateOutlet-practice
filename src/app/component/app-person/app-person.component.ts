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
    bio: 'Senior Software Engineer',
    image: 'https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl',
    posts: 10,
    followers: 1000,
    following: 500
  };
}
