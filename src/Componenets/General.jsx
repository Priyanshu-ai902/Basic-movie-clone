import React from 'react'

function General() {
    const menu = [
        {
            name: 'Recommended',
            images: [
                'https://stat4.bollywoodhungama.in/wp-content/uploads/2023/12/Salaar-255x368.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmDcXgcxCmRRW1CCk4ROfC_FBZv4C5dpZ8labax-ZNBlW3lEuYfg7HTTu0fDA6Olix2M&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWd0LAdekFv4zAMifpTNN-uy-PbncIezZb5FeOaorJJ07eS5ItB3cd8QcM_Rqf0qm2mdI&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCVKLYQ8p3i8Dir02zZDOFQR2DGqWz0M8vOrjM4pqX3Bs5yCowtohroqSW2Hd78j6i_8&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1QrQkNrSGpvn-wv6U8G7X1jo_9rdUs05Un2S_PEyKtOiUXQkOxleZATcjZQOHUDuwDY&usqp=CAU',
                'https://bollywoodmovieposters.com/wp-content/uploads/2023/09/phir-hera-pheri-poster-baburao-254x360.jpg',
                'https://www.boxofficemovies.in/now/wp-content/uploads/new-poster-of-Nawazuddins-most-awaited-Manjhi.jpg',
                'https://lh3.googleusercontent.com/0CDzrdh3Yd-JuL_2pXWR-fPbI5SPYBDThqfS0wt-dXQ94v4qk8Yl_TAsT_d6CK2Hj-QHIbCTaJSStoBNsoUHE9uh4qWGy6tUSvDtYdkZPw=s800-rw',
            ],
        },
        {
            name: 'coming soon',
            images: [
                'https://wallpapercave.com/wp/wp10779781.jpg',
                'https://stat5.bollywoodhungama.in/wp-content/uploads/2023/11/Yodha-1-165x212.jpg',
                'https://stat5.bollywoodhungama.in/wp-content/uploads/2023/12/Fighter-14-480x270.jpg',
                'https://www.indiablooms.com/showbiz_pic/2017/kABIR-1514201503.jpg',
                'https://m.media-amazon.com/images/I/81Calh8XRBL._AC_UF1000,1000_QL80_.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3nppHROlsukf6H8bK5ziSZO4QykL_ZPgfwLsdztyTKe1YaBL-NjVzJXCow-WR7S7sNk&usqp=CAU',
                'https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg',
                'https://ih1.redbubble.net/image.3204399184.4039/fposter,small,wall_texture,square_product,600x600.jpg',
            ],
        },
        {
            name: 'Action movie',
            images: [
                'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00372125-athtmreybc-portrait.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LcgODfh0rBzpwRd11gM3o43RPcJ5gJq0NDblLG2PSkDIolZwER8HeZMUUl0HJ5yipA0&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RCtE5DbXIr0RG1WID7koLWFqA20YMRDAY46WSPoh_zhGwPFTeLr8u6AC-akBATJePUY&usqp=CAU',
                'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00377865-fpnwvxwglt-portrait.jpg',
                'https://miro.medium.com/v2/resize:fit:1000/1*8XbG7p0nbT9yYoMPn152jQ.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVkMVnUjNZHnWyTt4ltZZRKFC4S-Jgzi_q3rcN1dYxkHaea9Q3XWzZTRDgjc1nIzghZg&usqp=CAU',
                'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
                'https://qph.cf2.quoracdn.net/main-qimg-3e77342512031e2cdbee727a0b18e78c-lq',
            ],
        },
        {
            name: 'comedy movie',
            images: [
                'https://cdn.cinematerial.com/p/297x/l7eqvqvu/stuber-movie-poster-md.jpg?v=1561052474',
                'https://www.filmsourcing.com/wp-content/uploads/2013/03/comedy-poster-tutorial-5.jpg',
                'https://img.fruugo.com/product/5/36/14188365_max.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiITbSeSZtx-xgsWWcteiLJ_NVcxAxDA6we3sNQ8cguwDuocr5UuNZefNBH4jV1AWmH9E&usqp=CAU',
                'https://www.boxofficemovies.in/now/wp-content/uploads/Abhay-Deol-and-Patralekha-starrer-Nanu-Ki-Jaanu-movie-poster.jpg',
                'https://lh3.googleusercontent.com/proxy/PoyDN3jIrK7n1Aejn7Nze4SRTu0HR_rcbZHaF-UKTBPvgl6GFuqE4Runv2n08JmZ91rHAvFDi_CBfMvICi95_BNqb7bOVczlTzT94sSsu2Nn6DKcfg4D4ILhShoxwerWEv4wI8qynwURCF4',
                'https://i.pinimg.com/originals/40/ab/e7/40abe7de293041fd3eb0e4da09e9386e.jpg',
                'https://ksr-ugc.imgix.net/assets/012/606/310/5e939028c839a9a23957b58505bae8d0_original.png?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1465356896&auto=format&frame=1&q=92&s=a4c22c064206e7f5bbe7c13876ea62af',
            ],
        },
        {
            name: 'superhero movie',
            images: [
                'https://i.pinimg.com/736x/ca/b2/51/cab25126fb1a90c5d2d9e4a75e0805e8.jpg',
                'https://i.pinimg.com/736x/9e/53/e0/9e53e0ef2f57a7a0c504713fbf772526.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWxfyMsW5otbWsNaiUbP8g52f5r7bK0Y0xA&usqp=CAU',
                'https://c8.alamy.com/comp/FXEAGB/avengers-assemble-2012-directed-by-joss-whedon-and-starring-robert-FXEAGB.jpg',
                'https://prashantb.files.wordpress.com/2011/11/latest-captain-america-movie-poster-inspires-nerd-awe.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGAQxd8prIkQQN1PJsuaHYS95cLbViRj1vgoMjoZ9S2e8Fvfg3VxYjlpuh6J8xHZS85A&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROD2quQP5EBtNY0booSHrri7e1oXXxfPy8JZ0y9VyCtW2QOhszW90RGrn7h0Kig9VMwLg&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE99v0dsgpV8FkgwduWoQnwdsfg5qvsZ8yuQ&usqp=CAU',
            ],
        },
        
        {
            name: 'horror movie',
            images: [
                'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00361556-hqbcvqaxpm-portrait.jpg',
                'https://i.pinimg.com/236x/2b/11/a7/2b11a7d3ad5d6b47ea4874f6408d5759.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtOgGo68OquidScHO1wFYpG4T6YeKWcdpWyfIp8MAzuQqOrIKOVYiIkgZqJeIpZ8Nh6c&usqp=CAU',
                'https://i.pinimg.com/originals/26/d1/3d/26d13d458dc440b9b3ce6c619d3d14c2.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUacl7_bHNzRnaeoLydCiKVLt7a6E2a9LgFy2AAAAfdD-uEHi2bQrLHzs-c8RpO2rvNi4&usqp=CAU',
                'https://i.pinimg.com/736x/b3/fd/52/b3fd52fca0ece7d653a36563946a36c7.jpg',
                'https://i.pinimg.com/736x/80/53/be/8053be71ed7c6ca49b76ef9ef926a6c8.jpg',
                'https://i.pinimg.com/1200x/8b/dc/39/8bdc39d73655f53ea8f4f5e0063f8ca7.jpg',
                ],
        },
    ]
    return (
        <div style={{ overflowX: 'auto' }}>
        <ul style={{ color: 'white', fontSize: '30px', padding: 0, listStyle: 'none' }}>
          {menu.map((item, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              {item.name}
              <ul style={{ display: 'flex', justifyContent: 'space-between', padding: 0, listStyle: 'none' }}>
                {item.images.map((image, imgIndex) => (
                  <li key={imgIndex} style={{ marginRight: '10px', marginTop: '10px' }}>
                    <img
                      src={image}
                      alt={`${item.name} ${imgIndex}`}
                      style={{ width: '100px', height: '150px', border: '2px solid grey', borderRadius: '30px' }}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      

    )
}

export default General
