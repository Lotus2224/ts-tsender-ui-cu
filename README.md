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
4. Deploy to fleek

# Command

- pnpm anvil / pnpm run anvil
- pnpm run dev / pnpm dev
- pnpm run test:unit / pnpm test:unit

# Address Used

- TSender: 0x5FbDB2315678afecb367f032d93F642f64180aa3
- Mock token address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 (can use the mint or mintTo function) (You can import token in MetaMask)
- The anvil1 default address (0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266) with private key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 has some tokens already minted.
