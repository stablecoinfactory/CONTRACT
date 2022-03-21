const { ethers, upgrades } = require('hardhat')

async function main() {
  const CONTROLLER_ADDRESS = '0xF80a7ec392563A141BECfa6Ea108c3fE79619271' 

  const ControllerContract = await ethers.getContractFactory('Controller')

  const controller = await upgrades.upgradeProxy(
    CONTROLLER_ADDRESS,
    ControllerContract,
  )

  console.log('Controller upgraded to:', controller.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
