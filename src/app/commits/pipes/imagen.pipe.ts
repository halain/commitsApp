import { Pipe, PipeTransform } from '@angular/core';
import { CommitGitHub } from '../interfaces/commits.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(commit: CommitGitHub,): string {
    console.log(commit.avatar_url);
    
    if (!commit.avatar_url) {
      return `assets/no-image.png`;
    } else {
      return commit.avatar_url;
  }}
  

}
