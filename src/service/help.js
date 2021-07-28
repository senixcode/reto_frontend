export const ErrorCustom = (error) => {
  if (error.response) {
    const {data, status,headers} = error.response
    console.log('error custom', data)
    console.log('error custom', status)
    console.log('error custom', headers)
    if(data) throw new Error(data.error)
  }
}


export const HeaderToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const isSatisfactoryStatus = ({status}) => [200, 201].includes(status)