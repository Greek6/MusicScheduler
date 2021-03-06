﻿export class YoutubeFile {
    name: string;
    url: string;
    path: string;
    downloaded: boolean;
    duration: number;
    downloadStatus: string;
}

export class User {
    name: string;
    timePlayed: string;
    youtubeLinks: Array<YoutubeFile>;
}

export class Info {
    CurrentlyPlayingSong: string;
    Volume: string;
    IsPaused: boolean;
    Users: Array<User>;
    CurrentlyPlayingAuthor: string;
}