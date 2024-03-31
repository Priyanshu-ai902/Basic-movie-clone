import React from 'react'

function Productionhouse() {
    const productionhouseList =[
       'https://i.ytimg.com/vi/NojiqicSq5A/maxresdefault.jpg',
       'https://1000logos.net/wp-content/uploads/2017/08/Color-Pixar-Logo.jpg',
       'https://static1.colliderimages.com/wordpress/wp-content/uploads/2016/07/marvel-studios-2016-logo-slice.jpg',
       'https://pbs.twimg.com/profile_images/1131448235707457537/p4iq0KWu_400x400.jpg',
       'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6d32c18-4610-436f-843d-c4ac6bf790ae/dgc4npj-212dd1d2-7885-459b-ac99-f3e18f12ab18.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZDMyYzE4LTQ2MTAtNDM2Zi04NDNkLWM0YWM2YmY3OTBhZVwvZGdjNG5wai0yMTJkZDFkMi03ODg1LTQ1OWItYWM5OS1mM2UxOGYxMmFiMTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sgEUzi0zw5PIJE2OqK80Q37FPE7yx6BM_DIH6laC3nk'
      ];
    
  return (
    <div style={{ display: 'flex',
     padding: '20px', 
     margin:'30px',
      justifyContent:'space-between', 
      marginTop: '5px', 
      gap: '5px' 
      }}>

      {productionhouseList.map((item, index)=>(
      <img key={index} src={item} alt={`Productionhouse ${index + 1}`} 
      style={{width: '200px', 
      border:'2px solid grey', 
      borderRadius:'30px',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
    }} 
    className="hoverEffect"/>
      ))}
    </div>
  )
}

export default Productionhouse
