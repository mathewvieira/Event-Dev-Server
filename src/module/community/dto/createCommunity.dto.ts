import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateCommunityDto {
    @IsString()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    logo_url: string

    @IsString()
    @IsOptional()
    phone_number: string

    @IsString()
    @IsOptional()
    link_instagram: string

    @IsString()
    @IsOptional()
    link_linkedin: string

    @IsString()
    @IsOptional()
    link_website: string

    @IsString()
    @IsOptional()
    link_github: string

    @IsString()
    is_active: boolean
}