# Zupass Configuration List

This repository contains a comprehensive list of Zupass configurations for various events and communities.

## Currently Configured Events

- 🏰 **Zuzalu**
- 🔗 **ZuConnect**
- 🌱 **Vitalia**
- 🏛️ **ZuArchitects**
- 🏔️ **ZuVillage Georgia**
- 🌅 **Edge Esmeralda**
- 🏝️ **Zanzalu 2024**
- 🏙️ **ETHBerlin04**
- 🏰 **ETHPrague 2024**
- 🏯 **BM (Builder Monastery)**
- 🌟 **MegaZu24**
- 🏮 **Shanhai Woo Chiang Mai**
- 🏔️ **Edge City Denver**
- 🏝️ **ZuThailand**

## Pending Configurations

The following events have configurations but are not yet launched (retroactive Zupass proofs pending member claims):
- Edge City Lanna
- Zanzalu 2024
- Invisible Garden
- Zelar City
- Web3Village Chiang Mai
- Web3Village Bangkok

## Wishlist Events

- Devconnect Istanbul
- Devcon Bangkok
- ZuCastle

## Technical Details

Each event configuration includes:
- Event ID
- Product ID
- Event Name
- Product Name
- PCD Type
- Public Key pair for verification

## Contributing

To add new event configurations:
1. Ensure you have the correct event and product IDs
2. Add the configuration to `zupassConfig.ts`
3. Update this README with the new event details
4. Submit a pull request

## Notes

- Some events may have multiple ticket types (e.g., Resident, Organizer, Speaker)
- All configurations use the standard "eddsa-ticket-pcd" proof type
- Public keys are provided as pairs for verification purposes