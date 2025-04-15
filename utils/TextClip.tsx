
const textClip = (text: string, limit = 20) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text
  }
  

export default textClip