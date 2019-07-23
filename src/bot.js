require('dotenv').config()
const { CLIENT_ID, CLIENT_SECRET, CLIENT_SIGNING_SECRET, BOT_TOKEN } = process.env
const { SlackAdapter } = require('botbuilder-adapter-slack')
const adapter = new SlackAdapter({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  clientSigningSecret: CLIENT_SIGNING_SECRET,
  botToken: BOT_TOKEN,
  scopes: ['bot']
})
const { Botkit } = require('botkit')
const controller = new Botkit({ adapter })

const welcomeMessage = require('./message.js')

const WHISPER_PERCENT = 0.975 // The likelyhood of whispering in #general
const GREETINGS = ['Hi', 'Hello', 'Welcome', 'Welcome to Screeps chat']
const EMOJIS = [':slightly_smiling_face::left_hand_wave:', ':right_hand_wave::slightly_smiling_face:', ':upside_down_right_hand_wave::upside_down_face:', ':upside_down_face::upside_down_left_hand_wave:']

const greeting = () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
const emoji = () => EMOJIS[Math.floor(Math.random() * EMOJIS.length)]

controller.on('team_join', async (bot, event) => {
  console.log(`Saying hello at ${Date.now()}`)
  await bot.replyWithTyping({ channel: GENERAL, user: event.user.id },{
    text: `${greeting()}, <@${event.user.id}>. ${emoji()}`,
    ephemeral: (Math.random() <= WHISPER_PERCENT)
  })
  await bot.startPrivateConversation({ user: event.user.id })
  await bot.say(welcomeMessage)
})

controller.on('message', async (bot, message) => {
  console.log(message)
  if (message.channel_type === 'im') {
    await bot.reply(message, welcomeMessage)
  }
})

controller.hears('welcomebot', 'message', async (bot, message) => {
  if (message.channel != 'C85PY93JA') {
    await bot.startConversationInThread(message.channel, message.user, message.ts)
    await bot.say('Lets discuss this in <#C85PY93JA|welcomebot-dev> :slightly_smiling_face:')
  }
})

controller.on('slash_command', async(bot, message) => {
  if (message.command === '/room') {
    let [shard,room] = message.text.split(' ') || []
    if (shard.length === 1) shard = `shard${shard}`
    const roomRegex = /^[EW]\d+[NS]\d+$/
    if (roomRegex.test(room)) {
      await bot.replyPublic(message, `https://screeps.com/a/#/room/${shard}/${room}`)
    } else {
      await bot.replyPrivate(message, `Invalid room`)
    }
  }
})
