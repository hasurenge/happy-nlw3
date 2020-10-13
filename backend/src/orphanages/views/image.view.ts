import { Image } from '../image.entity';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class ImageView {
  render(image: Image) {
    return {
      id: image.id,
      url: encodeURI(
        `http://localhost:${process.env.PORT}/uploads/${image.path}`,
      ),
    };
  }
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
}
