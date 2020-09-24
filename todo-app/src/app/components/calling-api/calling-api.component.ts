import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../post';
import { EROFS } from 'constants';
@Component({
  selector: 'app-calling-api',
  templateUrl: './calling-api.component.html',
  styleUrls: ['./calling-api.component.css'],
})
export class CallingAPIComponent implements OnInit {
  posts;
  error = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getPosts().subscribe(
    //   (posts) => {
    //     this.posts = posts.reverse();
    //     console.log(this.posts);
    //   },
    //   (error) => console.log(error)
    // );
    this.dataService
      .getPosts()
      .then((result) => (this.posts = result))
      .catch((error) => {
        console.log('Oops! Something went wrong');
        this.error = true;
      });
  }

  deletePost(id) {
    console.log(id);
    this.dataService.deletePost(id).subscribe((posts) => {
      this.posts = this.posts.filter((item) => item.id !== id);
      console.log('Post deleted successfully');
    });
  }
}
