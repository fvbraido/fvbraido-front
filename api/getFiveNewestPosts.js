import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl.js"

export default async function getFiveNewestPosts() {
  try {
    const response = await axios(`${apiBaseUrl}/posts/get-five-newest-posts`)
    return response.data
  } catch(error) {
    return {getDataError: true}
  }
}