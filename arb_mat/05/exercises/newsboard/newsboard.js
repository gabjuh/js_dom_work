'use strict'

{



  const init = () => {
    initProgressbar()
    showNumberOfAvailableMessages()
    showMessageByNumber(progressbar().value)
    $('body').addEventListener('keyup', handleKeyPress)
    $('[title=next]').addEventListener('click', nextMessage)
    $('[title=prev]').addEventListener('click', prevMessage)
    $('[title=first]').addEventListener('click', firstMessage)
    $('[title=last]').addEventListener('click', lastMessage)
  }

  const handleKeyPress = e => {
    if (e.altKey) return handleKeyCodeWithAlt(e)
    handleKeyCodeWithoutSpecialKeys(e)
  }

  const handleKeyCodeWithoutSpecialKeys = e => {
    if (e.key === 'ArrowRight') nextMessage(e)
    if (e.key === 'ArrowLeft') prevMessage(e)
  }

  const handleKeyCodeWithAlt = e => {
    if (e.key === 'ArrowRight') lastMessage(e)
    if (e.key === 'ArrowLeft') firstMessage(e)
  }

  const showNumberOfAvailableMessages = () => ($('.message_number').innerHTML = messages.length)

  const nextMessage = e => showMessageForEvent(e, (incCurrentMessageNumber()))
  const prevMessage = e => showMessageForEvent(e, (decCurrentMessageNumber()))
  const firstMessage = e => showMessageForEvent(e, (progressbar().value = 1))
  const lastMessage = e => showMessageForEvent(e, (progressbar().value = messages.length))

  const incCurrentMessageNumber = () => (progressbar().value += 1)
  const decCurrentMessageNumber = () => (progressbar().value -= 1)

  const showMessageForEvent = (e, targetMessageNumber) => {
    showMessageByNumber(targetMessageNumber)
    e.preventDefault()
  }

  const showMessageByNumber = messageNumber =>
      ($('.newsboard_content').innerHTML = messages[messageNumber - 1])

  // let currentMessageNumber = 1

  const initProgressbar = () => {
    progressbar().max = messages.length
    progressbar().value = 1
  }

  const progressbar = () => $('#messages_progress')

  init()
}

