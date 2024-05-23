export async function loadUsers() {
  
  try {    
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const res = await fetch("https://randomuser.me/api/?results=20")

    console.log(res)

    if (!res.ok) {
      console.log('error')
    }

    return res.json()

  } catch (error) {
    console.log(error)
  }
}