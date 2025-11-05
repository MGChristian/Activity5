import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum Categories {
  commercial = 'commercial',
  design = 'design',
  nature = 'nature',
  people = 'people',
  photography = 'photography',
  tech = 'tech',
  travel = 'travel',
  uncategorized = 'uncategorized',
}

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsEnum(Categories)
  category: Categories;
}
