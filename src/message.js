// the `fields` values do not truncate messages with more than 5 lines with "Show More..."
// if all of your attachments are less than 5 lines, you can replace this with the `text` value

const welcomeMessage = {
  as_user: true,
  link_names: true,
  text: `Welcome to the Screeps Slack! We\'re glad you\'re here.

Below are a few do\'s and dont\'s for the slack. Note that the Do Not\'s are things that you may receive warnings or a ban for based off of severity and repeated offenses. All warnings, temporary bans and permanant bans are at the moderators\' discretion.

The community here is usually a friendly and helpful group, but should you run into any issues, please bring them up to the moderators.`,
  attachments: [
    {
      title: 'Do:',
      fields: [
        { value: 'Check #announcements for updates, but do not respond to post or attempt discussion in that channel. You may react to posts with emojis' },
        { value: 'Discuss announcements in #announcements-any' },
        { value: 'Ask for assistance in #help, not #general' },
        { value: 'Ask permission before removing pinned posts or modifying integrations' },
        { value: 'Try to keep the discussions in line with the channel you\'re in' },
      ],
      mrkdwn_in: ['fields'],
      color: '#40C040',
    },
    {
      title: 'Do Not:',
      fields: [
        { value: 'Remove others\' pinned posts without permission' },
        { value: 'Delete, rename or archive a public channel you did not create' },
        { value: 'Remove/reconfigure others\' integrations without permissions' },
        { value: 'Add @archivebot to a private channel without consent of all users' },
        { value: 'Disrespect people who were asking for help in #help' },
        { value: 'Threaten physical injury or harass anyone' },
        { value: 'Refuse to disengage from serious arguments when asked to by an admin' },
        { value: 'Repeatedly provoke serious arguments' },
        { value: 'Engage in sexual harassment' },
      ],
      mrkdwn_in: ['fields'],
      color: '#C02020',
    },
    {
      title: 'Moderators',
      fields: [
        { value: '<@U1L3CFXL4>' },
        { value: '<@U1UJH3RGB>' },
        { value: '<@UCG2CMMPZ>' },
        { value: '<@U3KN4CJGN>(developer & community manager)' },
        { value: '<@U1VSERWHF>' },
      ],
      //			mrkdwn_in: ['fields'],
      color: '#74c8ed',
    },
    {
      title: 'Getting Started',
      fields: [
        { value: 'You can use the <https://screepspl.us/services/badge|Screeps+ badge generator> to generate your icon (use width: 512) and <https://get.slack.help/hc/en-us/articles/115005506003|set it as your profile picture>' },
        { value: 'If you\'ve never used slack before, you can learn how to format code blocks <https://get.slack.help/hc/en-us/articles/202288908-Format-your-messages#code-blocks|here>' },
        { value: 'Other how-to\'s can be found <https://get.slack.help/hc/en-us/categories/200111606-Using-Slack|here>' },
        //				{value: ''},
      ],
      mrkdwn_in: ['fields'],
      color: '#ffc90e',
    },
    {
      title: 'Helpful Links:',
      fields: [
        { value: '*API*: http://docs.screeps.com/api/' },
        { value: '*Game source code*: https://github.com/Screeps' },
        { value: '*Alliances*: http://www.leagueofautomatednations.com' },
        { value: '*Wiki*: https://wiki.screepspl.us' },
        { value: '*Third party tools*: http://docs.screeps.com/third-party.html' },
        { value: '*Screeps World*: https://screepsworld.com/' },
        { value: '*Spawning room recommendation*: https://screepsworld.com/2017/07/warning-novice-zones-are-lies-where-to-spawn-as-a-noob/' },
      ],
      mrkdwn_in: ['fields'],
    }],
};
module.exports = welcomeMessage;