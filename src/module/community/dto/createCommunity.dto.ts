import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateCommunityDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUrl({}, { message: 'A URL do logo é inválida.' })
  @IsNotEmpty({ message: 'A URL do logo não pode estar vazia.' })
  logo_url: string;

  @IsString()
  @IsOptional()
  phone_number?: string;

  @IsUrl({}, { message: 'O link do Instagram é inválido.' })
  @IsOptional()
  link_instagram?: string;

  @IsUrl({}, { message: 'O link do LinkedIn é inválido.' })
  @IsOptional()
  link_linkedin?: string;

  @IsUrl({}, { message: 'O link do website é inválido.' })
  @IsOptional()
  link_website?: string;

  @IsUrl({}, { message: 'O link do GitHub é inválido.' })
  @IsOptional()
  link_github?: string;
}
