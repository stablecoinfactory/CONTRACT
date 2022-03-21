const { ethers, upgrades } = require('hardhat')

async function main() {
  const ControllerContract = await ethers.getContractFactory('Controller')

  const controller = await upgrades.deployProxy(ControllerContract)

  await controller.deployed()

  console.log('Controller deployed to:', controller.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
