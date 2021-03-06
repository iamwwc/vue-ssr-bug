import path from 'path'

const resolve = (...dir) => path.resolve(...dir)

export default {
    serverPort: 5000,
    serverListenAddr: '127.0.0.1',
    serverApiPath: '/api/blog',

    usedDatabase: 'mongo',

    mongoDBHost: "127.0.0.1",
    mongoDBPort: 27017,
    mongoDBName: 'blog',

    postsCollectionName: 'posts',
    tagsCollectionName: 'tags',

    logLevel: 'debug',

    pluginsDir: resolve(__dirname, '../plugins'),

    sourceDir: 'D:\\Blogs\\dbsources',

}

// export interface Config {
//     serverPort: number,
//     serverListenAddr: string,
//     usedDatabase: string,
//     mongoDBHost: string,
//     mongoDBPort: number,
//     mongoDBName: string,
//     postsCollectionName: string,
//     logLevel: string,
//     sourceDir: string,
//     serverApiPath: string,
//     pluginsDir?: string
// }

// export interface DefaultConfig{
//     post:{
//         allowComments:boolean
//     }
// }