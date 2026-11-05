# Tailwake

Wake a PC from your iPhone or iPad—on the same local network or through an SSH relay you control.

[繁體中文](README.zh-Hant.md)

**Unlimited manual wakes are free.** Wake your PCs locally or remotely from the app without a monthly limit. Free users may see one banner at the bottom of the main screen. Premium adds Siri, Apple Shortcuts, scheduled Shortcuts automations, and an ad-free experience. Existing lifetime unlocks keep these premium benefits.

Tailwake wakes PCs with standard Wake-on-LAN (WoL) magic packets. When your device shares a local network with the PC, it broadcasts the packet directly. For a remote wake, Tailwake securely connects to an always-on relay device on the PC’s network. The relay device broadcasts the packet locally.

## Explore Tailwake

- [Instructions](INSTRUCTIONS.md) — Set up local and remote wakes, install wake tools, and configure pre- and post-wake online verification.
- [Automate Wakes](AUTOMATION.md) — Use premium Siri commands and Shortcuts to wake a PC by voice or on a schedule.
- [Privacy Policy](https://cp529414.github.io/Tailwake/privacy/) — Read how Tailwake handles your information.
- [Terms of Use](TERMS.md) — Review usage and service terms.
- [Support Development](SUPPORT.md) — Compare free and premium features, subscriptions, lifetime unlock, and optional tips.

> Your remote-access path is your choice. [Tailscale](https://tailscale.com/) is one way to reach a relay privately without opening an inbound router port.

Tailwake can verify whether a PC is already online, log the result of every wake, and provide a **Wake PC** action for Siri and Shortcuts.

## Your information

- No Tailwake sign-in or developer-run wake server.
- PC details, relay settings, wake history, and verification results stay on your device.
- SSH credentials and SecureOn passwords are stored in the iOS Keychain.
- Free-user advertising uses Google AdMob and consent controls. Tailwake requests non-personalized ads and does not request Apple's tracking permission. Google may still process advertising and diagnostic information; see the [Privacy Policy](https://cp529414.github.io/Tailwake/privacy/).
- Available in English and Traditional Chinese.

Use Tailwake only with computers, networks, and relay accounts that you own or are authorized to control. Wake-on-LAN depends on your hardware, operating-system settings, and network.
