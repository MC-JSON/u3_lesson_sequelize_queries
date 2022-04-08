const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllBusiness = async () => {
  const result = await Business.findAll()
  stringify(result)
}

const getABusinessById = async (id) => {
  const result = await Business.findByPk(id)
  stringify(result)
}

const getABusinessByRating = async () => {
  const result = await Business.findOne({ where: { rating: 5 } })
  stringify(result)
}

const getBusinessesByRating = async () => {
  const result = await Business.findAll({ where: { rating: 5 } })
  stringify(result)
}

const createBusiness = async () => {
  const result = await Business.create({
    name: 'Ruthie Town',
    address: 'Wherever She Likes Dr',
    rating: 5
  })
  stringify(result)
}

const updateBusiness = async () => {
  const result = await Business.update(
    {
      name: 'Ruth Town'
    },
    { where: { name: 'Ruthie Town' } }
  )
  stringify(result)
}

const deleteBusiness = async () => {
  const result = await Business.destroy({ where: { name: 'Ruth Town' } })
  stringify(result)
}

async function main() {
  try {
    // await findAllBusiness()
    // await getABusinessById(4)
    // await getABusinessByRating()
    // await getBusinessesByRating()
    // await createBusiness()
    // await updateBusiness()
    await deleteBusiness()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
