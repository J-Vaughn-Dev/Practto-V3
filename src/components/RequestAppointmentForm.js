import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { toRem } from '../utils/utils'
import Switch from 'material-ui/Switch'
import Button from 'material-ui/Button'
import { FormControl, FormControlLabel } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import breakpoints from '../theme/breakpoints'

const FinePrint = styled.p`
  padding: 0 ${toRem(12)};
  font-size: ${toRem(8)};
  line-height: ${toRem(12)};
  margin: 0;
`

const OffersWrapper = styled.div`margin-bottom: ${toRem(12)};`

const Offers = styled.h3`
  font-size: ${toRem(14)};
  margin: ${toRem(24)} 0 ${toRem(12)};
  font-weight: normal;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 32px;
  padding-right: 8px;
`

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: 200
  }
})

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const FieldWrapper = styled.div`
  padding: 16px;
  width: 100%;

  @media screen and (min-width: ${breakpoints._480}) {
    width: 50%;
  }
`

class TextFields extends Component {
  render () {
    const {
      classes,
      specialOffers = [],
      insurance,
      insurances = [],
      handleUpdate,
      practice
    } = this.props
    return (
      <StyledForm
        name='new_appointment_requested'
        method='post'
        action='thank-you'
        netlify
      >
        <input
          type='hidden'
          name='form-name'
          value='new_appointment_requested'
        />
        <input type='hidden' name='practice' value={practice} />
        <FieldWrapper>
          <TextField
            id='full_name'
            name='full_name'
            label='Full Name'
            margin='normal'
            className={classes.textField}
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            id='email'
            name='email'
            label='Email'
            margin='normal'
            className={classes.textField}
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            id='phone'
            name='phone'
            label='Phone Number'
            className={classes.textField}
          />
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            id='request_date'
            name='request_date'
            label='Request Date'
            type='date'
            InputLabelProps={{ shrink: true }}
            className={classes.textField}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormControl className={classes.textField}>
            <InputLabel htmlFor='insurance'>Insurance</InputLabel>
            <Select
              native
              value={insurance}
              onChange={handleUpdate('insurance')}
              input={<Input id='insurance' name='insurance' />}
            >
              <option value='' />
              {insurances &&
                insurances.map((suggestion, i) => (
                  <option key={i} value={suggestion.name}>
                    {suggestion.name}
                  </option>
                ))}
            </Select>
          </FormControl>
        </FieldWrapper>
        <FieldWrapper>
          <TextField
            label='Additional Comments'
            id='additional_comments'
            name='additional_comments'
            className={classes.textField}
          />
        </FieldWrapper>
        <FieldWrapper>
          {specialOffers.length > 0 &&
            <OffersWrapper>
              <Offers>Special Offers</Offers>
              {specialOffers.map((offer, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Switch
                      inputProps={{
                        name: `special_offer-${offer.key}`,
                        id: `special_offer-${offer.key}`
                      }}
                    />
                  }
                  label='$25 cash after your first visit'
                />
              ))}
            </OffersWrapper>}
        </FieldWrapper>

        <ButtonContainer>
          <Button type='submit' raised='true' color='primary'>
            Submit
          </Button>
          <FinePrint>
            * This form will request an appointment on your behalf. You should
            receive an email to confirm your visit shortly.
          </FinePrint>
        </ButtonContainer>
      </StyledForm>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  specialOffers: PropTypes.array,
  insurance: PropTypes.string,
  insurances: PropTypes.array,
  handleUpdate: PropTypes.func,
  practice: PropTypes.string
}

export default withStyles(styles)(TextFields)
