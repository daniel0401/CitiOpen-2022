function CreatePassRequestPage() {
    var passname = $('.IPRFPassName').text()
    var status = $('#IPrequestFormPassStatusMessageSpan').text()

    const passheader = '<div class="row"><div class="w-100 text-center"><h2 class="mb-0 font-weight-bold">' + passname + ' Pass</h2></div><div id="loggedinusercon" class="col-12"></div><div class="col-12"><hr></div></div>'
    const statusmessage = '<div id="StatusMessage">' + status + '</div>'

    $('#editPassRequestForm input, #editPassRequestForm select').addClass('form-control')
    $('.dateCheckBox').removeClass('form-control')
    $('#IPrequestFormPassStatusMessage').html('')
    if (!$(statusmessage)) {
        $(statusmessage).insertBefore('#IPrequestFormPassStatusMessage')
    }

    //PASSES
    if ($('#IPrequestFormContainer11701').length || $('#IPrequestFormContainer11801').length || $('#IPrequestFormContainer11901').length) {
        var emergency = '<td id="fieldCellop_nok"><div id="PRFPerDetailsLabelop_nok" class="PRFPerDetailsLabel">Emergency Contact Details</div></td>'
        var photo = `<div id="PRFPerDetailsLabelop_photo" class="PRFPerDetailsLabel">Image Uploader</div><ul class="IPFormMenu float-left"><li class="IPFormMenuItem" id="IPFormMenuAddPhotoButton" onclick="doEditPassRequestForm('addPhotoFromPassRequest')">Add Photo</li></ul>`

        if ($('#op_photo').val() != '') {
            photo = `<div id="PRFPerDetailsLabelop_photo" class="PRFPerDetailsLabel">Image Uploader</div><div class="photo-container"><li class="IPFormMenuItem" id="IPFormMenuEditPhotoButton" onclick="doEditPassRequestForm('editPhotoFromPassRequest')" style="height: 45px;margin: auto 20px;">Edit</li></div>`;
        }

        $('<div class="w-100 pass-form-content"><h3 class="mb-3 font-weight-bold">Person Details</h3></div><div class="row mt-2"><div class="col-12 mb-3 user-select"><td id="fieldCellSelect"><div id="PRFPerDetailsLabelSelect" class="PRFPerDetailsLabel">Select an existing person from the dropdown OR create a new person by filling out the form</div></div></div><div class="row mt-2"><div class="col-md-6 mb-3 full-name"></div><div class="col-md-6 mb-3 dob"></div></div><div class="row mt-2"><div class="col-md-6 mb-3 email-e1"></div><div class="col-md-6 mb-3 mobile-t2"></div></div><div class="row mt-2"><div class="col-md-6 mb-3 job-role"></div><div class="col-md-6 mb-3 gender"></div></div><div class="row mt-2"><div class="col-md-6 mb-3 address-one"></div><div class="col-md-6 mb-3 address-two"></div></div><div class="row mt-2"><div class="col-md-6 mb-3 address-three"></div><div class="col-md-6 mb-3 post-code"></div></div><div class="row mt-2"><div class="col-md-6 mb-3 emergency">' + emergency + '</div><div class="col-md-6 mb-3 photo">' + photo + '</div></div><hr>').prependTo('#ipPassRequestOPFormDiv')
        if (!$('.price-table').length) {
            $('<div class="col-12 col-md-5 col-lg-4 mb-lg-0 text-center"><div class="price-table"><div class="card radius-15"><div class="card-body"><div class="card-title"><h3 class="mb-2 font-weight-bold">Access Dates</h3><div class="check-all-dates"></div></div><hr><ul class="list-group access-dates-value"><div id="accessDatesDiv181" class="accessDatesDiv" style="margin:auto"></div></ul></div></div></div></div>').insertAfter('.IPPRFTDatesDiv')
        }

        $(passheader).insertBefore('.pass-form-content')
        $('#fieldCellop_name').detach().prependTo('.full-name')
        $('#fieldCellop_dob').detach().prependTo('.dob')
        $('#fieldCellop_e1').detach().prependTo('.email-e1')
        $('#fieldCellop_t2').detach().prependTo('.mobile-t2')
        $('#fieldCellop_role').detach().prependTo('.job-role')
        $('#fieldCellop_postnoms').detach().prependTo('.gender')
        $('#fieldCellop_a1').detach().prependTo('.address-one')
        $('#fieldCellop_a2').detach().prependTo('.address-two')
        $('#fieldCellop_a3').detach().prependTo('.address-three')
        $('#fieldCellop_acode').detach().prependTo('.post-code')
        $('textarea#op_nok').detach().insertAfter('#PRFPerDetailsLabelop_nok').addClass('form-control')

        $('#op_dob').attr('placeholder', 'mm/dd/yyyy')

        $('img#op_img').detach().prependTo('.photo-container')
        $('#IPpersonpanelInvalidFieldsDiv').detach().prependTo('.pass-form-content')

        $('.accessDatesDiv').detach().prependTo('.access-dates-value')
        $('#IPcheckAllDates7701,#IPclearAllDates7701,#IPcheckAllDates7901,#IPclearAllDates7901,#IPcheckAllDates8001,#IPclearAllDates8001').detach().prependTo('.check-all-dates')
        $('#IPcheckAllDates7701,#IPcheckAllDates7901,#IPcheckAllDates8001').html('Select All')

        if (!$('#EPRFPersonSelect').length) {
            $('#ipPassRequestOPFormDiv > div.row:nth-child(3)').remove()
            $('#ipPassRequestOPFormDiv > table:nth-child(19)').hide()
        }

        $('#EPRFPersonSelect').detach().appendTo('.user-select')

        $('#IPpassRequestFormReferenceDiv').insertBefore('#IPPRFTMenuRow')
        $('<hr>').insertBefore('#IPpassRequestFormReferenceDiv')
        $('<hr>').insertBefore('#IPPRFTMenuRow')

        $('#ipPassRequestOPFormDiv > table:nth-child(20),.IPPRFTDatesDiv').hide()
        $('#ipPassRequestOWrapper,#IPpassRequestFormPersonDetailsLegend,#IPrequestFormPassTypeHeader,.IPPRFTNotesDiv').remove()

        if ($('.IPrequestFormContainer').hasClass('is')) {
            $('#PRButtons').html(`<li id="BButtonCancel" class="btn btn-default" onclick="doMenuForm('newPassRequestsList')"><span id="BButtonCancelSpan">Cancel</span></li><li id="BButtonSaveDraft" class="btn btn-dark" onclick="SavePass()"><span id="BButtonSaveDraftSpan">Save</span></li><li id="BButtonFastSubmit" class="btn btn-success" onclick="SubmitPass()"><span id="BButtonFastSubmitSpan">Submit</span></li>`)
        } else if ($('.IPrequestFormContainer').hasClass('isDraft')) {
            $('#IPFormMenuAddPhotoButton').addClass('reqinvalid')
            $('#PRButtons').html(`<li id="BButtonCancel" class="btn btn-default" onclick="doMenuForm('listPassRequests')"><span id="BButtonCancelSpan">Cancel</span></li><li id="BButtonDelete" class="btn btn-danger" onclick="doEditPassRequestForm('dltPassRequest')"><span id="PRButtonDeleteSpan">Delete</span></li><li id="BButtonSaveDraft" class="btn btn-dark" onclick="SavePass()"><span id="BButtonSaveDraftSpan">Save</span></li><li id="BButtonFastSubmit" class="btn btn-success" onclick="SubmitPass()"><span id="BButtonFastSubmitSpan">Submit</span></li>`)
            if(sessionStorage.getItem('isDraft') != null) {
                $('<div class="container-box"><div class="rectangle"><div class="notification-text"><i class="bx bxs-error bx-flashing"></i><span>Not ready for Submission!</span></div></div></div>').insertBefore('#IPSysMessageRow')
                window.setTimeout(function () {
                    $('.rectangle').addClass('rectangle-out').removeClass('rectangle')
               }, 5000)
                sessionStorage.removeItem('isDraft')
                sessionStorage.removeItem('isSubmitted')
            }
        } else if ($('.IPrequestFormContainer').hasClass('isSubmitted')) {
            $('#IPFormMenuAddPhotoButton').addClass('reqinvalid')
            $('#PRButtons').html(`<li id="BButtonCancel" class="btn btn-default" onclick="doMenuForm('listPassRequests')"><span id="BButtonCancelSpan">Close</span></li><li id="BButtonDelete" class="btn btn-danger" onclick="doEditPassRequestForm('dltPassRequest')"><span id="PRButtonDeleteSpan">Delete</span></li><li id="BButtonSaveDraft" class="btn btn-dark" onclick="SavePass()"><span id="BButtonSaveDraftSpan">Save</span></li>`)
        } else if ($('.IPrequestFormContainer').hasClass('isApproved') || $('.IPrequestFormContainer').hasClass('isRejected')) {
            $('#PRButtons').html(`<li id="BButtonCancel" class="btn btn-default" onclick="doMenuForm('listPassRequests')"><span id="BButtonCancelSpan">Close</span></li>`)
            ApprovedPass()
            Disabled()
        }

        $('select, input, textarea, #IPFormMenuAddPhotoButton, .accessDatesDiv').each(function() {
            if($(this).hasClass('reqinvalid') || $(this).hasClass('auxInputInvalid') || $(this).hasClass('passdatesnotok')) {
                $('<div class="required-feedback">This field is required.</div>').insertAfter(this)
            }
        })

        if($('#PRFPerLockedFieldsInfo').length) {
            ApprovedPass()
        }
    }
}

function ApprovedPass() {
    var fullName = $('.PRFPerDetailsRowop_name #op_name').html()
    var dob = $('.PRFPerDetailsRowop_dob #op_dob').html()
    var email = $('.PRFPerDetailsRowop_e1 #op_e1').html()
    var mobile = $('.PRFPerDetailsRowop_t2 #op_t2').html()
    var role = $('.PRFPerDetailsRowop_role #op_role').html()
    var gender = $('.PRFPerDetailsRowop_postnoms #op_postnoms').html()
    var address = $('.PRFPerDetailsRowop_a1 #op_a1').html()
    var postCode = $('.PRFPerDetailsRowop_acode #op_acode').html()
    var nextOfKin = $('.PRFPerDetailsRowop_nok #op_nok').html()
    var clothing = $('#AUX_CF_CF062b8bb3caae90').html()

    $('<td id="fieldCellop_name"><div id="PRFPerDetailsLabelop_name" class="PRFPerDetailsLabel">Full Name&nbsp;</div><input size="30" class="required form-control" validate="j" id="op_name" value="'+ fullName +'" name="op_name" onblur="revalidate(this)"></td>').prependTo('.full-name')
    $('<td id="fieldCellop_dob"><div id="PRFPerDetailsLabelop_dob" class="PRFPerDetailsLabel">Date Of Birth&nbsp;</div><input type="text" size="30" name="op_dob" id="op_dob" style="" class="required form-control" value="'+ dob +'" placeholder="mm/dd/yyyy"><span id="PRFPerDetailsPostLabelop_dob">dd/mm/yyyy</span></td>').prependTo('.dob')
    $('<td id="fieldCellop_e1"><div id="PRFPerDetailsLabelop_e1" class="PRFPerDetailsLabel">Email Address&nbsp;</div><input type="text" size="30" style="" class="required form-control" validate="j" id="op_e1" value="'+ email +'" name="op_e1" onblur="revalidate(this)"></td>').prependTo('.email-e1')
    $('<td id="fieldCellop_t2"><div id="PRFPerDetailsLabelop_t2" class="PRFPerDetailsLabel">Mobile&nbsp;</div><input type="text" size="30" style="" class="required form-control" validate="j" id="op_t2" value="'+ mobile +'" name="op_t2" onblur="revalidate(this)"></td>').prependTo('.mobile-t2')
    $('<td id="fieldCellop_role"><div id="PRFPerDetailsLabelop_role" class="PRFPerDetailsLabel">Job Title / Role&nbsp;</div><input type="text" size="30" style="" class="required form-control" validate="j" id="op_role" value="'+ role +'" name="op_role" onblur="revalidate(this)"></td>').prependTo('.job-role')
    $('<td id="fieldCellop_postnoms"><div id="PRFPerDetailsLabelop_postnoms" class="PRFPerDetailsLabel">Gender&nbsp;</div><input type="text" size="30" style="" class="required form-control" validate="j" id="op_postnoms" value="'+ gender +'" name="op_postnoms" onblur="revalidate(this)"></td>').prependTo('.gender')
    $('<td id="fieldCellop_a1"><div id="PRFPerDetailsLabelop_a1" class="PRFPerDetailsLabel">Home Address&nbsp;</div><input type="text" size="30" style="" class="required form-control" validate="j" id="op_a1" value="'+ address +'" name="op_a1" onblur="revalidate(this)"></td>').prependTo('.address-one')
    $('<td id="fieldCellop_acode"><div id="PRFPerDetailsLabelop_acode" class="PRFPerDetailsLabel">Postal/ZIP Code&nbsp;</div><input type="text" size="30" style="" class="required form-control" validate="j" id="op_acode" value="'+ postCode +'" name="op_acode" onblur="revalidate(this)"></td>').prependTo('.post-code')
    $('.clothing').html('<div class="PRFPerDetailsLabel">T-Shirt Size:</div><input type="text" size="30" style="" class="required form-control disabled-function" validate="j" id="AUX_CF_CF062b8bb3caae90" value="'+ clothing +'" name="AUX_CF_CF062b8bb3caae90"></td><p><span>Please Note:</span> All clothing is <b>Unisex</b><br><i>This field is <b>LOCKED</b> due to clothing already been selected</i></p>')
    $('.emergency').html('<div id="PRFPerDetailsLabelop_nok" class="PRFPerDetailsLabel">Emergency Contact Details</div><textarea style="" class="required form-control" validate="j" id="op_nok" name="op_nok" onblur="revalidate(this)">'+ nextOfKin +'</textarea>')

    $('#PRFPerLockedFieldsInfo').remove()
}

function SavePass() {
    $('body').css('overflow', 'hidden')
    $('#PRButtons li').addClass('disabled-function')
    $('<div class="container-box"><div class="rectangle"><div class="notification-text"><i class="bx bxs-bell bx-tada"></i> <span>Saved Successfully!</span></div></div></div>').insertBefore('#IPSysMessageRow')
    window.setTimeout(function () {
        $('<div class="container-box_2"><div class="rectangle"><div class="notification-text"><i class="bx bx-loader bx-spin bx-flip-horizontal"></i><span>Reloading Form</span></div></div></div>').insertBefore('#IPSysMessageRow')
    }, 1000)
    window.setTimeout(function () {
        doEditPassRequestForm('savePassRequestChanges') 
    }, 2000)
}

function SubmitPass() {
    $('body').css('overflow', 'hidden')
    $('#PRButtons li').addClass('disabled-function')
    sessionStorage.setItem('isDraft',true)
    sessionStorage.setItem('isSubmitted',true)
    $('<div class="container-box"><div class="rectangle"><div class="notification-text"><i class="bx bx-loader bx-spin bx-flip-horizontal"></i><span>Submitting Form</span></div></div></div>').insertBefore('#IPSysMessageRow')
    window.setTimeout(function () {
        doEditPassRequestForm('submitPassRequest')
    }, 1000)
}

function Disabled() {
    $('input, select, textarea').removeClass('reqvalid').addClass('disabled-function')
    $('.cf-selectlist').removeClass('auxInputValid')
    $('.accessDatesDiv').removeClass('passdatesok')
    $('#IPFormMenuEditPhotoButton, .check-all-dates').remove()
    $('.dateCheckBox').each(function () {
        $(this).attr('disabled', true).css('cursor', 'not-allowed')
    })
}
