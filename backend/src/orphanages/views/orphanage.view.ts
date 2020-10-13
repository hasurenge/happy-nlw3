import { Orphanage } from '../orphanage.entity';
import { Injectable } from '@nestjs/common';
import { ImageView } from './image.view';

@Injectable()
export class OrphanageView {
  constructor(private imageView: ImageView) {}
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      open_at_weekends: orphanage.open_at_weekends,
      opening_hours: orphanage.opening_hours,
      images: this.imageView.renderMany(orphanage.images),
    };
  }
  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
}
