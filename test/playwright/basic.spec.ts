import { testWithSynpress } from '@synthetixio/synpress';
import basicSetup from '../wallet-setup/basic.setup'
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright'
import { anvil1Address, anvil2Address, mockTokenAddress, oneAmount } from '../test-constants'

const test = testWithSynpress(metaMaskFixtures(basicSetup));
const { expect } = test;

test('should show the airdrop form when conneted, otherwise not', async ({ page, context, metamaskPage, extensionId }) => {
    await page.goto('/');
    await expect(page.getByText('Please connect')).toBeVisible();

    const metaMask = new MetaMask(context, metamaskPage, basicSetup.walletPassword, extensionId);
    await page.getByTestId('rk-connect-button').click();
    await page.getByTestId('rk-wallet-option-metaMask').waitFor({
        state: 'visible',
        timeout: 30000
    });
    await page.getByTestId('rk-wallet-option-metaMask').click();
    await metaMask.connectToDapp();

    const customNetwork = {
        name: 'Anvil',
        rpcUrl: 'http://127.0.0.1:8545',
        chainId: 31337,
        symbol: 'ETH',
    };
    await metaMask.addNetwork(customNetwork);

    await page.getByRole('textbox', { name: "0x", exact: true }).waitFor({
        state: 'visible',
        timeout: 3000
    })
    await page.getByRole('textbox', { name: '0x', exact: true }).fill(mockTokenAddress);
    await page.getByRole('textbox', { name: '0x123..., 0x456...' }).fill(anvil2Address);
    await page.getByRole('textbox', { name: '200, 300...' }).fill(oneAmount);
    await expect(page.getByText('Token Name:Mock Token')).toBeVisible();
});