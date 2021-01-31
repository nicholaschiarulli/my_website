---
title: How to install and use Lazygit
description: Installing and using Lazygit for Mac and Linux(Ubuntu)
date: "2021-01-31"
tags: ["workflow"]
---

This guide will show you how to install the latest version of Lazygit. Lazygit is a simple terminal UI for git commands, written in Go with the gocui library.

## Install Lazygit
### Homebrew
Tap:
```
brew install jesseduffield/lazygit/lazygit
```
Core:
```
brew install lazygit
```

### Ubuntu
```
sudo add-apt-repository ppa:lazygit-team/release
sudo apt-get update
sudo apt-get install lazygit
```

### Using Lazygit
In your project run
```
lazygit
```
That will bring up a cool little interface to easily add, commit, and push your code.

Personally, I mainly use lazygit for quickly pushing my code and easily selecting which files I want to stage. However there is a lot more to lazygit and you can read about it here [lazygit](https://github.com/jesseduffield/lazygit)
