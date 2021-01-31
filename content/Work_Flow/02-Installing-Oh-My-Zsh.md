---
title: How to install and use Oh My Zsh
description: Installing and using Oh My Zsh
date: "2021-01-31"
tags: ["workflow"]
---

This guide will show you how to install Oh My Zsh. Oh My Zsh is an open source, community-driven framework for managing your zsh configuration. This post will only cover some of the basics, so if you want a more advanced and detailed experience with oh-my-zsh I would recommend you go to their [github repository](https://github.com/ohmyzsh/ohmyzsh)

## Install Oh My Zsh
curl:
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
wget:
```
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Plugins
Oh My Zsh comes with a lot of plugins for you to take advantage of. You can take a look in the [plugins](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins) directory and/or the [wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) to see what's currently available.

### Enabling Plugins
Once you spot a plugin (or several) that you'd like to use with Oh My Zsh, you'll need to enable them in the ```.zshrc``` file. You'll find the zshrc file in your ```$HOME``` directory. Open it with any text editor and you'll see a spot to list all the plugins you want to load.
```
vi ~/.zshrc
```
This is how you will add some of the plugins to your zshrc
```
plugins=(
  git
  zsh-syntax-highlighting
  zsh-autosuggestions
)
```

### Using Plugins
Each plugin includes a README, documenting it. This README should show the aliases (if the plugin adds any) and any extra features that are included in that particular plugin.

The plugins above are the ones I use the most or think are useful

For these effects to take place you can either ```source``` your oh-my-zsh or you can just open a new terminal.