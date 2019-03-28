import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import setupDb from './db'
import FlashcardController from './flashcards/controller'



const app = createKoaServer({
  cors: true,
  controllers: [
    FlashcardController
  ],
  // authorizationChecker: async (action: Action, roles: string[]) => {
  //   const header: string = action.request.headers.authorization;

  //   if (header && header.startsWith('Bearer ')) {
  //     const [, token] = header.split(' ');
  //     if(token) {
  //       const userId = verify(token).data.id
  //       const user = await User.findOne(userId)
  //         //https://github.com/typestack/routing-controllers#authorized-decorator
  //       if(user && !roles.length) 
  //         return true
  //       if (user && roles.find(roles => user.roles.indexOf(roles) !== -1))
  //         return true;

  //     }
  //   }
  //   return false;
  // },
  // authorizationChecker: (action: Action) => {
  //   const header: string = action.request.headers.authorization
  //   if (header && header.startsWith('Bearer ')) {
  //     const [ , token ] = header.split(' ')
  //     try {
  //       return !!(token && verify(token))
  //     }
  //     catch (e) {
  //       throw new BadRequestError(e)
  //     }    }
  //   return false
  // },
  // currentUserChecker: async (action: Action) => {
  //   const header: string = action.request.headers.authorization
  //   if (header && header.startsWith('Bearer ')) {
  //     const [ , token ] = header.split(' ')
  //     if (token) {
  //       const userId = verify(token).data.id;
  //       const user = await User.findOne(userId);
  //       return user
  //     }
  //   }
  //   return undefined
  // }
})

setupDb()
  .then(_ =>
    app.listen(process.env.PORT|| 4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))