import type { FeaturedNetwork, PreDefinedNetwork } from 'types/networks';

import appConfig from 'configs/app/config';
import arbitrumIcon from 'icons/networks/icons/arbitrum.svg';
import artisIcon from 'icons/networks/icons/artis.svg';
import ethereumClassicIcon from 'icons/networks/icons/ethereum-classic.svg';
import ethereumIcon from 'icons/networks/icons/ethereum.svg';
import gnosisIcon from 'icons/networks/icons/gnosis.svg';
import optimismIcon from 'icons/networks/icons/optimism.svg';
import poaSokolIcon from 'icons/networks/icons/poa-sokol.svg';
import poaIcon from 'icons/networks/icons/poa.svg';
import rskIcon from 'icons/networks/icons/rsk.svg';

// predefined network icons
const ICONS: Partial<Record<PreDefinedNetwork, React.FunctionComponent<React.SVGAttributes<SVGElement>>>> = {
  xdai_mainnet: gnosisIcon,
  xdai_optimism: optimismIcon,
  xdai_aox: arbitrumIcon,
  eth_mainnet: ethereumIcon,
  etc_mainnet: ethereumClassicIcon,
  poa_core: poaIcon,
  rsk_mainnet: rskIcon,
  xdai_testnet: arbitrumIcon,
  poa_sokol: poaSokolIcon,
  artis_sigma1: artisIcon,
};

// for easy .env.example update
// const FEATURED_NETWORKS = JSON.stringify([
//   {
//     title: 'Ethereum',
//     url: 'https://blockscout.com/eth/mainnet',
//     group: 'mainnets',
//     type: 'eth_mainnet',
//   },
//   {
//     title: 'Ethereum Classic',
//     url: 'https://blockscout.com/etx/mainnet',
//     group: 'mainnets',
//     type: 'etc_mainnet',
//   },
//   {
//     title: 'Gnosis Chain',
//     url: 'https://blockscout.com/xdai/mainnet',
//     group: 'mainnets',
//     type: 'xdai_mainnet',
//   },
//   {
//     title: 'Astar (EVM)',
//     url: 'https://blockscout.com/astar',
//     group: 'mainnets',
//     type: 'astar',
//   },
//   {
//     title: 'Shiden (EVM)',
//     url: 'https://blockscout.com/shiden',
//     group: 'mainnets',
//     type: 'astar',
//   },
//   {
//     title: 'Klaytn Mainnet (Cypress)',
//     url: 'https://klaytn-mainnet.aws-k8s.blockscout.com/',
//     group: 'mainnets',
//     type: 'klaytn',
//   },

//   {
//     title: 'Goerli',
//     url: 'https://blockscout.com/eth/goerli/',
//     group: 'testnets',
//     type: 'goerli',
//   },
//   {
//     title: 'Optimism Goerli',
//     url: 'https://blockscout.com/optimism/goerli/',
//     group: 'testnets',
//     type: 'optimism_goerli',
//   },
//   {
//     title: 'Optimism Bedrock Alpha',
//     url: 'https://blockscout.com/optimism/bedrock-alpha',
//     group: 'testnets',
//     type: 'optimism_bedrock_alpha',
//   },
//   {
//     title: 'Gnosis Chiado',
//     url: 'https://blockscout.com/gnosis/chiado/',
//     group: 'testnets',
//     type: 'gnosis_chiado',
//   },
//   {
//     title: 'Shibuya (EVM)',
//     url: 'https://blockscout.com/shibuya',
//     group: 'testnets',
//     type: 'shibuya',
//   },

//   {
//     title: 'Optimism Opcraft',
//     url: 'https://blockscout.com/optimism/opcraft',
//     group: 'other',
//     type: 'optimism_opcraft',
//   },
//   {
//     title: 'Optimism on Gnosis Chain',
//     url: 'https://blockscout.com/xdai/optimism',
//     group: 'other',
//     type: 'optimism_gnosis',
//   },
//   {
//     title: 'ARTIS-Σ1',
//     url: 'https://blockscout.com/artis/sigma1',
//     group: 'other',
//     type: 'artis_sigma1',
//   },
//   {
//     title: 'LUKSO L14',
//     url: 'https://blockscout.com/lukso/l14',
//     group: 'other',
//     type: 'lukso_l14',
//   },
//   {
//     title: 'POA',
//     url: 'https://blockscout.com/poa/core',
//     group: 'other',
//     type: 'poa_core',
//   },
//   {
//     title: 'POA Sokol',
//     url: 'https://blockscout.com/poa/sokol',
//     group: 'other',
//     type: 'poa_sokol',
//   },
// ]).replaceAll('"', '\'');

const featuredNetworks: Array<FeaturedNetwork> = (() => {
  return appConfig.featuredNetworks.map((network) => ({
    ...network,
    icon: network.icon || (network.type ? ICONS[network.type] : undefined),
  }));
})();

export default featuredNetworks;