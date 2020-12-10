/* Api routes */
import Fizzbuzz from './fizzbuzz'

export default (app) => {

  /* API Start */

  // Fizz Buzz Generator
  app.use('/fizzbuzz', Fizzbuzz)
 }


