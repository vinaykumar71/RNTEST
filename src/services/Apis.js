/*
* Defining API
* File containing all API call that can be shared across our entire project.
*
*/

import { Network } from './NetworkRequest'

export default class Apis {

  static fetch_music = () => {
    return Network('GET', 'search?term=linkin+park&limit=50')
  }

}