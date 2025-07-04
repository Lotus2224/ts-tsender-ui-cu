# Introduce

1. Create a basic react/nextjs application
2. Connect our wallet, with a nicer connect application
3. Implement this function
    ```javascript
    function airdropERC20(
        address tokenAddress,
        address[] calldata recipients,
        uint256[] calldat amounts,
        uint256 totalAmount
    )
    ```
4. E2E testing
5. Deploy to vercel/fleek, website: https://ts-tsender-ui-cu-six.vercel.app/

# Command

- pnpm anvil / pnpm run anvil
- pnpm run dev / pnpm dev
- pnpm run test:unit / pnpm test:unit
- pnpm exec playwright test --ui
- pnpm exec playwright test
- pnpm exec playwright show-report
- pnpm synpress

# Address Used

- TSender: 0x5FbDB2315678afecb367f032d93F642f64180aa3
- Mock token address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 (can use the mint or mintTo function) (You can import token in MetaMask)
- The anvil1 default address (0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266) with private key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 has some tokens already minted.

# Example

## 未连接钱包时的界面
![未连接钱包时的界面](./images/0.png)

## TSender界面
![TSender界面](./images/1.png)

## Test UI
![Test UI](./images/4.png)

## Test Show Report
![Test Show Report](./images/5.png)
![Test Show Report](./images/6.png)

## 帐户1
![帐户1](./images/2.png)

## 帐户2
![帐户2](./images/3.png)