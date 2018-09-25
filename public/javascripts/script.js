let modal = $('#delete-modal')
    let modalOverlay = $('#delete-modal-overlay')
    let modalOpenLink = $('#delete')

    modalOverlay.on('click', closeModal)

    function closeModal() {
        modal.toggleClass('closed')
        modalOverlay.toggleClass('closed')
    }

    modalOpenLink.on('click', openModal)

    function openModal() {
        modal.toggleClass('closed')
        modalOverlay.toggleClass('closed')
    }