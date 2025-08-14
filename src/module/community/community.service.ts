import { Injectable } from "@nestjs/common";
import { CommunityRepository } from "./community.repository";

@Injectable()
export class CommunityService {
    constructor(private readonly communityRepository: CommunityRepository) {}

    async getAll(take: number, skip: number) {
        return await this.communityRepository.getAll(take, skip);
    }
}