type reviewOptions = 1 | 2 | 3 | 4 | 5 | boolean

const userReview = (review: reviewOptions) => {
  if(!review) {
    console.log('O usuário não deixou o seu feedback')
    return
  } else {
    switch(review) {
      case 1:
        console.log(`Obrigado pela ${review} estrela, desculpe-nos por qualquer transtorno`);
      break
      default:
        console.log(`Obrigado pelas ${review} estrelas, esperamos te ver em breve!`);
      break     
    }
  }
}

userReview(false)
userReview(1)
userReview(2)
userReview(3)
userReview(4)
userReview(5)